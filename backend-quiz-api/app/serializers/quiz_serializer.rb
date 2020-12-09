class QuizSerializer < ActiveModel::Serializer
  attributes :id, :player, :score
end
