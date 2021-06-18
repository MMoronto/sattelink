class Item < ApplicationRecord
    has_many :reviews

    before_create :slugify

    def sligify
        self.slug = name.parameterize
    end
end
