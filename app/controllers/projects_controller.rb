class ProjectsController < ApplicationController
    def index
        @projects = Project.includes(:todos)
    end

    def create
        render plain: params[:todo].inspect
    end
end
