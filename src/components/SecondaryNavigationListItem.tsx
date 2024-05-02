import React from 'react';
import { NavLink } from 'react-router-dom';

interface SecondaryNavigationListItemProps {
  isCurrent?: boolean;
  linkName: string;
  url: string;
}

const SecondaryNavigationListItem = (props: SecondaryNavigationListItemProps) => {
  const { isCurrent, linkName, url } = props;
  return (
    <li className="secondary-navigation-list-item">
      <NavLink
        to={url}
        aria-current={isCurrent ? 'page' : 'false'}
        className={({ isActive, isPending }) => {
          return isActive ? 'active' : isPending ? 'pending' : '';
        }}
      >
        {linkName}
      </NavLink>
    </li>
  );
};

export default SecondaryNavigationListItem;
