import { propertyConstants } from '../Constants';
import { propertyService } from '../Services';
import { alertActions } from './index.jsx';
import { history } from '../Helpers';

export const propertyActions = {
  create,
  getAll,
  delete: _delete,
};

function create(property) {
  return (dispatch) => {
    dispatch(request(property));

    propertyService.create(property).then(
      (property) => {
        dispatch(success(property));
        history.push('/search');
        dispatch(alertActions.success('Property created successfully'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(property) {
    return { type: propertyConstants.CREATE_REQUEST, property };
  }
  function success(user) {
    return { type: propertyConstants.CREATE_SUCCESS, property };
  }
  function failure(error) {
    return { type: propertyConstants.CREATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    propertyService.getAll().then(
      (properties) => dispatch(success(properties)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: propertyConstants.GETALL_REQUEST };
  }
  function success(properties) {
    return { type: propertyConstants.GETALL_SUCCESS, properties };
  }
  function failure(error) {
    return { type: propertyConstants.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    propertyService.delete(id).then(
      (property) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: propertyConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: propertyConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: propertyConstants.DELETE_FAILURE, id, error };
  }
}
