module Api
    module V1
        class ItemsController < ApplicationController
            def index
                items = Item.all

                render json: ItemSerializer.new(items).serialized_json
            end
        end
    end
end