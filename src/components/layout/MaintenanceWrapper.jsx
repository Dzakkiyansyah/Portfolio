import React from 'react';
import MaintenancePage from '../../pages/MaintenancePage';

const MaintenanceWrapper = ({ children, isUnderMaintenance = false }) => {
  if (isUnderMaintenance) {
    return <MaintenancePage />;
  }

  return children;
};

export default MaintenanceWrapper;