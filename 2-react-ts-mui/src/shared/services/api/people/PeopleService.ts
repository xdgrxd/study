import { Environment } from '../../../environment';
import { Api } from '../../api/axios-config';

interface IListingPerson {
  id: number;
  cityId: number;
  fullName: string;
  email: string;
}
interface IPersonDetail {
  id: number;
  cityId: number;
  fullName: string;
  email: string;
}

type IPersonWithTotalCount = {
  data: IListingPerson[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ''
): Promise<IPersonWithTotalCount | Error> => {
  try {
    const relativeUrl = `/people?_page=${page}&_per_page=${Environment.LISTING_LINES_LIMIT}&fullName_like=${filter}`;

    const { data, headers } = await Api.get(relativeUrl);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Environment.LISTING_LINES_LIMIT
        ),
      };
    }

    console.log('Headers:' + headers);
    console.log('Data:', data);

    return new Error('Error when listing services.');
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message ||
        'Error when consulting the registers.'
    );
  }
};

const getById = async (id: number): Promise<IPersonDetail | Error> => {
  try {
    const relativeUrl = `/people/${id}`;

    const { data } = await Api.get(relativeUrl);

    if (data) {
      return data;
    }

    return new Error('Error when consulting the registers.');
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message ||
        'Error when consulting the registers.'
    );
  }
};

const create = async (
  data: Omit<IPersonDetail, 'id'>
): Promise<number | Error> => {
  try {
    const relativeUrl = '/people/';

    const { data } = await Api.post<IPersonDetail>(relativeUrl);

    if (data) {
      return data.id;
    }

    return new Error('Error when create register.');
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Error when create register.'
    );
  }
};

const updateById = async (
  id: number,
  userData: IPersonDetail
): Promise<void | Error> => {
  try {
    const relativeUrl = `/people/${id}`;
    await Api.put<IPersonDetail>(relativeUrl, userData);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Error when update register.'
    );
  }
};

const deleteById = async (id: number): Promise<any> => {
  try {
    const relativeUrl = `/people/${id}`;

    await Api.delete(relativeUrl);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Error when delete register.'
    );
  }
};

export const PeopleService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
