import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content_manager_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
