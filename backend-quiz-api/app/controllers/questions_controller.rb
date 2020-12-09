class QuestionsController < ApplicationController
  before_action :set_question

  def index 
    @questions = Question.all 
    render json: @questions
  end

  def create 
    question = Question.new(question_params)
    if question.save! 
      render json: question 
    else 
      render json: {error: "An error occured during creation..."}
    end
  end

  def show 
    if @question
      render json: @question 
    else 
      render json: {error: "Unable to find with ID"}
    end
  end

  def update 
    if @question.update
      render json: @question
    else 
      render json: {error: "Unable to find with ID"}
    end
  end

  def delete 
    @question.destroy
  end

  private
    def set_question
      @question = Question.find_by(id: params[:id])
    end
    def question_params
      params.require(:question).permit(:category, :question, :correct_answer, :incorrect_answers)
    end
end
