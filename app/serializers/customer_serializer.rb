class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :address
end
