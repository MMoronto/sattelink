class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :image_url, :price, :details
end
