class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::MimeResponds
    
    before_action :configure_permitted_parameters, if: :devise_controller?
    respond_to :json

      protected
    
      def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :address ])
      end
end
