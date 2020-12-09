class Quiz < ApplicationRecord
  has_many :high_scores
  has_many :quiz_questions
  has_many :questions, through: :quiz_questions
end
