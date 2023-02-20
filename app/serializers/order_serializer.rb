class OrderSerializer < ActiveModel::Serializer
  attributes :id, :status, :total_amount
  has_one :customer
end
