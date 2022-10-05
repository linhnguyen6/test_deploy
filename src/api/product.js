import instance from "./instance";

const url = `/products`;

export const create = (product) => {
  return instance.post(url, product);
};

export const read = () => {
  return instance.get(url);
};

export const update = (product) => {
  return instance.put(`${url}/${product.id}`, product);
};

export const destroy = (id) => {
  return instance.delete(`${url}/${id}`);
};
