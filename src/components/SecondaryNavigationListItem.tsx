import React from 'react';
import { Link } from 'react-router-dom';

interface SecondaryNavigationListItemProps {
  isCurrent?: boolean;
  linkName: string;
  url: string;
}

const SecondaryNavigationListItem = (props: SecondaryNavigationListItemProps) => {
  const { isCurrent, linkName, url } = props;
  return (
    <li className="secondary-navigation-list-item">
      <Link to={url} aria-current={isCurrent ? 'page' : 'false'}>
        {linkName}
      </Link>
    </li>
  );
};

export default SecondaryNavigationListItem;
