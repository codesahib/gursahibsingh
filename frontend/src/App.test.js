import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => { localStorage.clear(); });

test('homepage presents approved section order and featured personal project', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  expect([...document.querySelectorAll('main > section[id]')].map(section => section.id)).toEqual(['skills', 'work', 'about', 'notes', 'contact']);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('GursahibSingh.');
  expect(document.querySelector('.site-header')).not.toHaveTextContent('Gursahib');
  expect(document.querySelector('.project')).toHaveTextContent('Master Control Terminal');
  expect(document.documentElement.dataset.theme).toBe('dark');
});

test('atlas keyboard navigation reveals skills and meaningful project destinations', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const tabs = screen.getAllByRole('tab');
  fireEvent.keyDown(tabs[0], { key: 'ArrowRight' });
  expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  expect(tabs[1]).toHaveFocus();
  const panel = screen.getByRole('tabpanel');
  expect(within(panel).getByText('FastAPI')).toBeInTheDocument();
  expect(within(panel).getByRole('link')).toHaveAttribute('href', '/#project-terminal');
  fireEvent.keyDown(tabs[1], { key: 'End' });
  expect(within(panel).getByText('OpenFGA')).toBeInTheDocument();
});

test('theme preference stays consistent when navigating to the real travel article', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
  expect(localStorage.getItem('notebook-theme')).toBe('day');
  fireEvent.click(screen.getByRole('link', { name: /Notes from Thailand/ }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('THAILAND 2019');
  expect(document.documentElement.dataset.theme).toBe('light');
  expect(screen.getByText(/From the archive: these are my original/)).toBeInTheDocument();
});

test('missing articles have a useful recovery route', () => {
  render(<MemoryRouter initialEntries={['/blogs/missing']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Nothing here. Yet.');
  expect(screen.getByRole('link', { name: 'Back to home ↗' })).toHaveAttribute('href', '/');
});
