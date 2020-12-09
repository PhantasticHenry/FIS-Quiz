class HighScoreSerializer < ActiveModel::Serializer
  attributes :id
  has_one :quiz
end
