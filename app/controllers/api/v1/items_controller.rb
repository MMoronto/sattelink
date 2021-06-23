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
        end
    end
end