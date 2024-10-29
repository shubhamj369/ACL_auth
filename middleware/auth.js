const permissions = {
  super_admin: ['view_all', 'manage_users', 'assign_roles', 'system_settings'],
  admin: ['view_all', 'manage_users', 'limited_settings'],
  manager: ['view_team', 'manage_reports', 'enter_data'],
  normal: ['view_self']
};

const checkPermission = (requiredPermission) => (req, res, next) => {
  const userRole = req.user.role;  // Assume req.user contains user details after login
  const rolePermissions = permissions[userRole] || [];

  if (rolePermissions.includes(requiredPermission)) {
    return next();  // Access granted
  }
  return res.status(403).json({ msg: 'Access Denied' });
};
