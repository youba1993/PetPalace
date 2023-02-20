class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :price
  has_one :order
  has_one :product
end
