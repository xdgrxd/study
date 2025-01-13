import { Environment } from '../../environment';
import { Api } from '../api/axios-config';

interface IListingPerson {
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
    const relativeUrl = `/people?_page=${page}&_limit=${Environment.LISTING_LINES_LIMIT}&fullName_like=${filter}`;

    const { data, headers } = await Api.get(relativeUrl);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Environment.LISTING_LINES_LIMIT
        ),
      };
    }

    return new Error('Error when listing services.');
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Error when listing services.'
    );
  }
};

const getById = async (): Promise<any> => {};

const create = async (): Promise<any> => {};

const updateById = async (): Promise<any> => {};

const deleteById = async (): Promise<any> => {};

export const PeopleService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
