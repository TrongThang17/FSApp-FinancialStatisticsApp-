import service from '@src/services';

const postCurrentPermission = async ({
  menu,
  permissions,
}: {
  menu: string;
  permissions: any[];
}) => {
  const url = '/v1/user/current-permission';
  const body = {
    menu,
    permissions,
  };

  const res = await service.api.post({ url, data: body });

  return res.data;
};

const getAllPermission = async () => {
  const url = '/v1/user/permission';
  const res = await service.api.get({ url });

  return res.data;
};

export default {
  postCurrentPermission,
  getAllPermission,
};
