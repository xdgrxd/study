import { useNavigate, useParams } from 'react-router-dom';
import { DefaultPageLayout } from '../../shared/layouts';
import { DetailTools } from '../../shared/components';
import { Input, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { PeopleService } from '../../shared/services/api/people/PeopleService';

export const PeopleDetail: React.FC = () => {
  const { id = 'new' } = useParams<'id'>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [titleUserName, setTitleUserName] = useState('');

  useEffect(() => {
    if (id !== 'new') {
      setIsLoading(true);

      PeopleService.getById(Number(id)).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          navigate('/people');
        } else {
          setTitleUserName(result.fullName);
          console.log(result);
        }
      });
    }
  }, [id]);

  const handleSave = () => {
    console.log('Save');
  };

  const handleDelete = (id: number) => {
    if (confirm('Do you want to delete this?')) {
      PeopleService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert('Register has been deleted!');
          navigate('/people');
        }
      });
    }
  };

  const [typeUserName, setTypeUserName] = useState('');

  return (
    <DefaultPageLayout
      title={id === 'new' ? typeUserName || 'New person' : titleUserName}
      toolBar={
        <DetailTools
          buttonNewText="New"
          showDeleteButton={id !== 'new'}
          showNewButton={id !== 'new'}
          onClickNew={() => {
            navigate('/people/detail/new');
          }}
          onClickBack={() => {
            navigate('/people/');
          }}
          onClickDelete={() => {
            handleDelete(Number(id));
          }}
          onClickSave={() => {
            handleSave;
          }}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}

      <Typography variant="h1">Content here</Typography>
    </DefaultPageLayout>
  );
};
