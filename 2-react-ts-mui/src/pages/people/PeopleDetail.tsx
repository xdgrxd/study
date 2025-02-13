import { useNavigate, useParams } from 'react-router-dom';
import { DefaultPageLayout } from '../../shared/layouts';
import { DetailTools } from '../../shared/components';
import { Typography } from '@mui/material';

export const PeopleDetail: React.FC = () => {
  const { id = 'new' } = useParams<'id'>();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('Save');
  };

  const handleDelete = () => {
    console.log('Delete');
  };

  return (
    <DefaultPageLayout
      title="Person Detail"
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
            handleDelete;
          }}
          onClickSave={() => {
            handleSave;
          }}
        />
      }
    >
      <Typography variant="h1">Content here</Typography>
    </DefaultPageLayout>
  );
};
