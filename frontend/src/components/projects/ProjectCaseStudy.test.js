import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

beforeEach(() => { localStorage.clear(); });

test('home summaries open dedicated case studies without replacing existing work', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  ['League Sync', 'College Import', 'Booking Reliability'].forEach(title => {
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
  });
  expect(document.querySelector('.project')).toHaveTextContent('Master Control Terminal');
  fireEvent.click(screen.getByRole('link', { name: /01.*Integration reliability.*League Sync/ }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('League Sync');
  expect(document.title).toBe('League Sync | Gursahib Singh');
});

test.each([
  ['league-sync', 'League Sync', '10 / 10'],
  ['college-import', 'College Import', '14 / 15'],
  ['booking-reliability', 'Booking Reliability', '15 / 31'],
])('direct /projects/%s route presents evidence, accessible screenshots and source limits', (slug, title, metric) => {
  render(<MemoryRouter initialEntries={[`/projects/${slug}`]}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(title);
  expect(within(screen.getByRole('table')).getByText(metric)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'After', pressed: true })).toBeInTheDocument();
  const afterLink = screen.getByRole('link', { name: `Open full-size ${title} after screenshot` });
  const afterSource = within(afterLink).getByRole('img').getAttribute('src');
  fireEvent.click(screen.getByRole('button', { name: 'Before' }));
  expect(screen.getByRole('button', { name: 'Before', pressed: true })).toBeInTheDocument();
  const beforeLink = screen.getByRole('link', { name: `Open full-size ${title} before screenshot` });
  expect(within(beforeLink).getByRole('img').getAttribute('src')).not.toBe(afterSource);
  expect(beforeLink).toHaveAttribute('target', '_blank');
  expect(screen.getByText(/The repository is private/)).toBeInTheDocument();
  expect(screen.getByText(/Human engineering time.*were not measured/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Repository ↗' })).toHaveAttribute('href', `https://github.com/codesahib/${slug}`);
  expect(screen.getByRole('link', { name: 'Get in touch for source access.' })).toHaveAttribute('href', '/#contact');
});

test('related-project navigation resets screenshot selection and retains theme', () => {
  render(<MemoryRouter initialEntries={['/projects/league-sync']}><App /></MemoryRouter>);
  fireEvent.click(screen.getByRole('button', { name: 'Before' }));
  fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
  fireEvent.click(screen.getByRole('link', { name: /Data correctness College Import/ }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('College Import');
  expect(screen.getByRole('button', { name: 'After', pressed: true })).toBeInTheDocument();
  expect(document.documentElement.dataset.theme).toBe('light');
});

test('unknown project routes show recovery instead of an empty case study', () => {
  render(<MemoryRouter initialEntries={['/projects/unknown']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Nothing here. Yet.');
  expect(screen.getByRole('link', { name: 'Back to home ↗' })).toHaveAttribute('href', '/');
});
