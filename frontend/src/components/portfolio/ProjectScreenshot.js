import React from 'react';
import { useTheme } from '../common/Theme';
import dashboardDark from '../../static/img/projects/master-control-terminal-dark.png';
import dashboardLight from '../../static/img/projects/master-control-terminal-light.png';

export default function ProjectScreenshot() {
  const { theme } = useTheme();
  const screenshot = theme === 'light' ? dashboardLight : dashboardDark;
  return <figure className="project-preview">
    <a href={screenshot} target="_blank" rel="noopener noreferrer" aria-label="Open full-size Master Control Terminal dashboard screenshot">
      <img src={screenshot} alt="Master Control Terminal dashboard showing portfolio value, account contribution room, asset allocation, and recent activity with sample data" width="1600" height="1669" loading="lazy" decoding="async" />
    </a>
    <figcaption>Dashboard overview · fictional demo values<br />Click to view full size ↗</figcaption>
  </figure>;
}
