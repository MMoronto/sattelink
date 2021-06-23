module Api
    module V1
        class ItemsController < ApplicationController
            def index
                items = Item.all

                render json: ItemSerializer.new(items).serialized_json
            end

            def show
                item = Item.find_by(slug: params[:slug])

                renderjson: ItemSerializer.new(items).serialized_json
            end

            def create
                item = Item.new(item_params)
            end

            private

            def item_params
                params.require(:item).permit(:name, :image_url, :price, :details)
            end
        end
    end
end