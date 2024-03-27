/*
 *
 * Add
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import AddBrand from '../../components/Manager/AddBrand';
import SubPage from '../../components/Manager/SubPage';

class Add extends React.PureComponent {
  render() {
    const { history, brandFormData, auth, formErrors, brandChange, addBrand } =
      this.props;

    return (
      <SubPage
        title='Add Brand'
        actionTitle='Cancel'
        handleAction={() => history.goBack()}
      >
        <AddBrand
          brandFormData={brandFormData}
          formErrors={formErrors}
          brandChange={brandChange}
          addBrand={addBrand}
          auth={auth}
        />
      </SubPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    brandFormData: state.brand.brandFormData,
    formErrors: state.brand.formErrors,
    auth: state.account.user
  };
};

export default connect(mapStateToProps, actions)(Add);
