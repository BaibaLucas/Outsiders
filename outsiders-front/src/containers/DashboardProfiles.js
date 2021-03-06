// == Package Imports
import { connect } from "react-redux";

// == Local imports
import DashboardProfiles from "../components/BackOffice/DashboardProfiles";
import { changeAdminField } from "../store/action";

const mapStateToProps = (state) => ({
  userList: state.admin.userList,
});

// ACTIONS/FUNCTIONS that we give to Props (DashboardProfiles)
const mapDispatchToProps = (dispatch) => ({

  loadUsersData: () => {
    dispatch({ type: "GET_USERS" });
  },

  handleDelete: () => {
    dispatch({ type: 'DELETE_USER' });
  },

  handleChange: (value, name) => {
    dispatch(changeAdminField(value, name));
  }
  
  });

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProfiles);
