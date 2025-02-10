import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToolListItems } from '../../shared/components';
import { DefaultPageLayout } from '../../shared/layouts';
import {
  IListingPerson,
  PeopleService,
} from '../../shared/services/api/people/PeopleService';
import { useDebounce } from '../../hooks';

export const PeopleListing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();

  const [rows, setRows] = useState<IListingPerson[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    
    debounce(() => {
      PeopleService.getAll(1, search).then((result) => {
        setIsLoading(false);
        
        if (result instanceof Error) {
          alert(result.message);
        } else {
          console.log(result);

          setTotalCount(result.totalCount)
          setRows(result.data);
        }
      });
    });
  }, [search]);

  return (
    <DefaultPageLayout
      title="People Listing"
      toolBar={
        <ToolListItems
          showSearchInput
          buttonNewText="New person"
          searchText={search}
          searchTextOnChange={(text) =>
            setSearchParams({ search: text }, { replace: true })
          }
        />
      }
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DefaultPageLayout>
  );
};
