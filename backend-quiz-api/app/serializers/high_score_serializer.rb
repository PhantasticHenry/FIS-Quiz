class HighScoreSerializer < ActiveModel::Serializer
  attributes :id, :high_score
  has_one :quiz
end
