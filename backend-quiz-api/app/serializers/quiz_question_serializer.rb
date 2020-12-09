class QuizQuestionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :quiz
  has_one :question
end
