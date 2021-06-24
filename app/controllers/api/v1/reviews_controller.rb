module Api
    module V1
        class ReviewsController < ApplicationController

            private

            def review_params
                params.require(:review).permit(:title, :description, :score, :item_id)
            end
        end
    end
end