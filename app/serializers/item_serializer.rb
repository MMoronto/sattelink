class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :image_url, :avg_score, :price, :details
  has_many :reviews
end
