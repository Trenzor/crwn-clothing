import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySectons } from '../../redux/directory/directory.selctors';

const Directory = ({ sections }) => (
  <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySectons
})

export default connect(mapStateToProps)(Directory);