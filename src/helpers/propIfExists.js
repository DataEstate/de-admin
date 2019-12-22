// @flow

type PropIfExists = (propName: string, value?: any) => {};

export const propIfExists: PropIfExists = (propName, value) => {
  return value ? { [propName]: value } : {};
};

export default propIfExists;
