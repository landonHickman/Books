class BooksController < ApplicationController

  def app
    render component: "App"
  end

  def index
    @books = Book.order(id: :desc)
    render json: @books
  end

  def create
    @book = Book.new(book_params)
    if(@book.save)
      render json: @book
    else
      
    end
  end

  def update
    @book = Book.find(params[:id])
    if(@book.update(book_params))
      render json: @book
    else
      
    end
  end
  private

  def book_params
    params.require(:book).permit(:author, :title)
  end
end
