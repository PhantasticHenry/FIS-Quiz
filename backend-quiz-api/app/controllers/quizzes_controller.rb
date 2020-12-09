class QuizzesController < ApplicationController
  def index 
    @quizzes = Quiz.all 
    render json: @quizzes
  end

  def create
    questions = Question.all
    quiz = Quiz.new(quiz_params)
    questions.each do |question|
      qq = quiz.quiz_questions.build(question_id: question.id)
      qq.save!
    end
    if quiz.save!
      render json: quiz
    else 
      render json: {error: "An error occured during creation..."}
    end
  end

  private 
  def quiz_params
    params.require(:quiz).permit(:player, :score)
  end
end
