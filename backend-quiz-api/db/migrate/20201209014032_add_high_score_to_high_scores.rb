class AddHighScoreToHighScores < ActiveRecord::Migration[6.0]
  def change
    add_column :high_scores, :high_score, :integer
  end
end
