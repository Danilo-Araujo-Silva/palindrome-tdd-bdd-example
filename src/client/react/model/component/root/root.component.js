import React from 'react';

import 'shared/configuration/dependencies';
import MaterialUIThemeProvider from 'client/react/model/component/theme/material_ui/theme_provider.component';
import Router from 'client/react/model/component/router/router.component';

const Root = () => (
  <MaterialUIThemeProvider>
    <Router />
  </MaterialUIThemeProvider>
);

export default Root;
