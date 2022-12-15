import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import ky from 'ky';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, Collapse, Form, FormGroup, Input, Label } from 'reactstrap';
import config from '../services/config';
import { useSpecialTranslation } from '../services/i18n';

export default function Comments({ globalId, showNewCommentForm }) {
  const [isNewCommentFormOpen, setIsNewCommentFormOpen] = useState(false);
  const [isPublicCommentsOpen, setIsPublicCommentsOpen] = useState(false);

  const clientId = `existing-comments-${globalId}`;
  const fetchComments = async () => {
    const response = await ky
      .get(`${config.projectInformation.commentsTableUrl}/query`, {
        searchParams: {
          f: 'json',
          where: `${config.projectInformation.fieldNames.guid} = '${globalId}'`,
          outFields: '*',
          orderByFields: `${config.projectInformation.fieldNames.commentDt} DESC`,
        },
      })
      .json();

    return response.features ?? [];
  };

  const existingCommentsQuery = useQuery([clientId], fetchComments);

  const t = useSpecialTranslation();

  const { handleSubmit, formState, reset, control } = useForm({ mode: 'onChange' });
  const queryClient = useQueryClient();
  const submitComment = async (data) => {
    await ky
      .post(`${config.projectInformation.commentsTableUrl}/addFeatures`, {
        searchParams: {
          f: 'json',
          features: JSON.stringify([
            {
              attributes: {
                ...data,
                [config.projectInformation.fieldNames.guid]: globalId,
                [config.projectInformation.fieldNames.commentDt]: new Date(),
              },
            },
          ]),
        },
      })
      .json();

    queryClient.invalidateQueries([clientId]);

    reset();
  };
  const submitMutation = useMutation(submitComment, { retry: 3 });

  const toggleNewCommentForm = () => {
    setIsNewCommentFormOpen((current) => !current);
  };
  const togglePublicComments = () => {
    setIsPublicCommentsOpen((current) => !current);
  };

  return (
    <div className="p-3">
      {showNewCommentForm ? (
        <>
          <div className="d-flex justify-content-center mt-2 mb-1">
            <Button size="sm" onClick={toggleNewCommentForm} outline>
              {t('trans:comments.leaveComment')}{' '}
              <FontAwesomeIcon icon={isNewCommentFormOpen ? faChevronDown : faChevronUp} />
            </Button>
          </div>

          <Collapse isOpen={isNewCommentFormOpen}>
            <Form onSubmit={handleSubmit((data) => submitMutation.mutate(data))}>
              <FormGroup>
                <Label>{t('trans:comments.name')}</Label>
                <Controller
                  name={config.projectInformation.fieldNames.personName}
                  control={control}
                  render={({ field, fieldState }) => (
                    <Input {...field} disabled={submitMutation.isLoading} invalid={fieldState.error ? true : false} />
                  )}
                  rules={{ maxLength: 50 }}
                  defaultValue=""
                />
              </FormGroup>
              <FormGroup>
                <Label>{t('trans:comments.organization')}</Label>
                <Controller
                  name={config.projectInformation.fieldNames.personOrg}
                  control={control}
                  rules={{ maxLength: 50 }}
                  render={({ field, fieldState }) => (
                    <Input {...field} disabled={submitMutation.isLoading} invalid={fieldState.error ? true : false} />
                  )}
                  defaultValue=""
                />
              </FormGroup>
              <FormGroup>
                <Label>{t('trans:comments.contact')}</Label>
                <Controller
                  name={config.projectInformation.fieldNames.personCont}
                  control={control}
                  rules={{ maxLength: 50 }}
                  render={({ field, fieldState }) => (
                    <Input {...field} disabled={submitMutation.isLoading} invalid={fieldState.error ? true : false} />
                  )}
                  defaultValue=""
                />
              </FormGroup>
              <FormGroup>
                <Label>{t('trans:comments.comment')}</Label>
                <Controller
                  name={config.projectInformation.fieldNames.comment}
                  control={control}
                  rules={{ required: true, maxLength: 1000 }}
                  render={({ field, fieldState }) => (
                    <Input
                      type="textarea"
                      {...field}
                      disabled={submitMutation.isLoading}
                      invalid={fieldState.error ? true : false}
                    />
                  )}
                  defaultValue=""
                />
              </FormGroup>
              {submitMutation.isError ? (
                <Alert color="danger">There was an error submitting your comment. Please try again later.</Alert>
              ) : null}
              <div className="d-flex flex-direction-row align-items-center justify-content-between">
                <span className="justify-self-end">{t('trans:comments.required')}</span>
                <div>
                  <Button onClick={() => reset()} color="danger" disabled={submitMutation.isLoading}>
                    {t('trans:comments.cancel')}
                  </Button>
                  <Button
                    disabled={!formState.isValid || submitMutation.isLoading}
                    color="primary"
                    className="ms-1"
                    type="submit"
                  >
                    {t('trans:comments.submit')}
                  </Button>
                </div>
              </div>
            </Form>
          </Collapse>
        </>
      ) : null}

      <div className="d-flex flex-direction-row justify-content-center align-items-center mt-3">
        <Button size="sm" onClick={togglePublicComments} outline>
          {t('trans:comments.publicComments')}{' '}
          {existingCommentsQuery.data?.length > 0 ? <span>({existingCommentsQuery.data.length})</span> : null}{' '}
          <FontAwesomeIcon icon={isPublicCommentsOpen ? faChevronDown : faChevronUp} />
        </Button>
      </div>

      <Collapse isOpen={isPublicCommentsOpen} className="mt-3">
        {existingCommentsQuery.isError ? <Alert color="danger">There was an error loading the comments.</Alert> : null}
        {!existingCommentsQuery.isLoading && existingCommentsQuery.data?.length ? (
          existingCommentsQuery.data.map((comment) => (
            <Alert color="dark" key={comment.attributes.OBJECTID} className="clearfix">
              <p>{comment.attributes[config.projectInformation.fieldNames.comment]}</p>
              <span className="float-end">
                {new Date(comment.attributes[config.projectInformation.fieldNames.commentDt]).toLocaleString()}
              </span>
            </Alert>
          ))
        ) : (
          <i>No comments yet.</i>
        )}
      </Collapse>
    </div>
  );
}

Comments.propTypes = {
  globalId: PropTypes.string.isRequired,
  showNewCommentForm: PropTypes.bool.isRequired,
};
