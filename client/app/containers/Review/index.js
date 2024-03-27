/*
 *
 * Review
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import SubPage from '../../components/Manager/SubPage';
import ReviewList from '../../components/Manager/ReviewList';
import SearchResultMeta from '../../components/Manager/SearchResultMeta';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import NotFound from '../../components/Common/NotFound';
import Pagination from '../../components/Common/Pagination';
import UserRole from '../../components/Manager/UserRole';
import { ROLES } from '../../../../server/constants';

class Review extends React.PureComponent {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    const {
      reviews,
      isLoading,
      advancedFilters,
      fetchReviews,
      approveReview,
      rejectReview,
      deleteReview,
      user
    } = this.props;

    const displayPagination = advancedFilters.totalPages > 1;
    const displayReviews = reviews && reviews.length > 0;

    const merchantId = user.merchant?._id;

    function getReviewForMerchant(reviews, merchantId) {
      const review = reviews.filter(review => review.merchant === merchantId);
      return review;
    }

    const mainReview =
      user.role === ROLES.Merchant
        ? getReviewForMerchant(reviews, merchantId)
        : reviews;


    return (
      <div className='review-dashboard'>
        <SubPage title={'Reviews'} isMenuOpen={null}>
          {isLoading && <LoadingIndicator />}

          {displayPagination && (
            <Pagination
              totalPages={advancedFilters.totalPages}
              onPagination={fetchReviews}
            />
          )}
          {mainReview && (
            <>
              <SearchResultMeta label='reviews' count={mainReview.count} />
              <ReviewList
                reviews={mainReview}
                approveReview={approveReview}
                rejectReview={rejectReview}
                deleteReview={deleteReview}
              />
            </>
          )}

          {!isLoading && !displayReviews && (
            <NotFound message='No reviews found.' />
          )}
        </SubPage>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.review.reviews,
    isLoading: state.review.isLoading,
    advancedFilters: state.review.advancedFilters,
    user: state.account.user
  };
};

export default connect(mapStateToProps, actions)(Review);
