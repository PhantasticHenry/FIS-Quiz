class HighScoresController < ApplicationController
  before_action :set_quiz

  def index 
    @high_scores = HighScore.all 
    render json: @high_scores
  end

  def create 
    high_score = @quiz.high_scores.build(high_score_params)
    if high_score.save!
      render json: high_score
    else 
      render json: {error: "An error has occured during creation..."}
    end
  end

  private 
  def set_quiz 
    @quiz = Quiz.find_by(id: :quiz_id)
  end

  def high_score_params 
    params.require(:high_score).permit(:quiz_id)
  end
end
