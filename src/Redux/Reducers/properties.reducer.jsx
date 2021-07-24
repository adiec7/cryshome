import { propertyConstants } from '../Constants';

export function properties(state = {}, action) {
  switch (action.type) {
    case propertyConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case propertyConstants.GETALL_SUCCESS:
      return {
        items: action.properties,
      };
    case propertyConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case propertyConstants.DELETE_REQUEST:
      // add 'deleting:true' property to property being deleted
      return {
        ...state,
        items: state.items.map((property) =>
          property.id === action.id ? { ...property, deleting: true } : property
        ),
      };
    case propertyConstants.DELETE_SUCCESS:
      // remove deleted property from state
      return {
        items: state.items.filter((property) => property.id !== action.id),
      };
    case propertyConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to property
      return {
        ...state,
        items: state.items.map((property) => {
          if (property.id === action.id) {
            // make copy of property without 'deleting:true' property
            const { deleting, ...propertyCopy } = property;
            // return copy of property with 'deleteError:[error]' property
            return { ...propertyCopy, deleteError: action.error };
          }

          return property;
        }),
      };
    default:
      return state;
  }
}
