class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :slug
      t.string :image_url
      t.float :price
      t.string :details

      t.timestamps
    end
  end
end
