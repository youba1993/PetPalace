class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :category, :image_url
  has_one :category
end
