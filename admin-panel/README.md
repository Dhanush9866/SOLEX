# SOLNEX Admin Panel

A fully functional, modern admin panel built with React, TypeScript, and Tailwind CSS for managing your SOLNEX project.

## 🚀 Features

### **Core Functionality**
- **Dashboard**: Comprehensive overview with statistics, charts, and quick actions
- **User Management**: Full CRUD operations for user accounts
- **Industry Management**: Manage industry sectors and categories
- **Services Management**: Control service offerings and configurations
- **Training Management**: Manage training programs and courses
- **Enrollment Tracking**: Monitor student enrollments and progress
- **Inquiry Management**: Handle customer inquiries and support requests
- **Profile Management**: Admin profile and settings

### **Technical Features**
- **Responsive Design**: Works on all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with persistent preferences
- **Authentication**: Secure login system with protected routes
- **Real-time Data**: Live statistics and activity monitoring
- **Search & Filtering**: Advanced search and filter capabilities
- **Export Functionality**: Data export in various formats
- **Mobile Optimized**: Touch-friendly interface for mobile devices

### **UI Components**
- **Modern Design**: Clean, professional interface using shadcn/ui
- **Interactive Charts**: Recharts integration for data visualization
- **Data Tables**: Sortable, filterable tables with pagination
- **Modal Dialogs**: Smooth form dialogs for data entry
- **Toast Notifications**: User feedback and status updates
- **Loading States**: Skeleton loaders and progress indicators

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd admin-panel
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔐 Authentication

### Demo Login
For demonstration purposes, the admin panel accepts any email and password combination:
- **Email**: Any valid email format (e.g., `admin@solnex.com`)
- **Password**: Any password (e.g., `password123`)

### Production Setup
In production, replace the demo authentication in `src/pages/Login.tsx` with your actual authentication API:

```typescript
// Replace this section with your API call
const response = await apiService.login(formData);
await login(response.token, { email: formData.email });
```

## 📱 Usage

### **Dashboard**
- View key metrics and statistics
- Monitor user growth and revenue trends
- Access quick actions for common tasks
- View recent activity and notifications

### **User Management**
- **Add Users**: Create new user accounts with roles and permissions
- **Edit Users**: Update user information and status
- **Delete Users**: Remove user accounts
- **Search & Filter**: Find users by name, email, role, or status
- **Export Data**: Download user data for analysis

### **Navigation**
- **Sidebar**: Access all main sections
- **Header**: Theme toggle, user info, and logout
- **Breadcrumbs**: Navigate between sections
- **Mobile Menu**: Responsive navigation for mobile devices

### **Quick Actions**
- **Frontend Access**: Direct link to your main website
- **Quick Add**: Fast creation of common items
- **Bulk Operations**: Manage multiple items at once

## 🎨 Customization

### **Theme Colors**
Modify the color scheme in `tailwind.config.js`:

```javascript
extend: {
  colors: {
    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
    },
    // Add your custom colors here
  }
}
```

### **Adding New Pages**
1. Create a new page component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Add navigation item to `src/components/Layout.tsx`

### **Custom Components**
All UI components are built with shadcn/ui and can be customized:
- Modify component styles in `src/components/ui/`
- Add new components as needed
- Extend existing components with additional functionality

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file for configuration:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=SOLNEX Admin
VITE_FRONTEND_URL=http://localhost:5173
```

### **API Integration**
Update the API endpoints in your components to connect to your backend:

```typescript
// Example API call
const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
const users = await response.json();
```

### **Database Connection**
The admin panel is designed to work with any backend:
- REST APIs
- GraphQL
- Real-time databases (Firebase, Supabase)
- Custom backend solutions

## 📊 Data Management

### **Local Storage**
- User authentication tokens
- Theme preferences
- User session data

### **State Management**
- React Context for global state
- Local state for component-specific data
- React Query for server state management

### **Data Persistence**
- Real-time updates from your backend
- Offline capability with local caching
- Data synchronization across tabs

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
# or
yarn build
```

### **Deploy Options**
- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop deployment
- **AWS S3**: Static hosting
- **Docker**: Containerized deployment
- **Custom Server**: Any Node.js server

### **Environment Setup**
1. Set production environment variables
2. Configure your backend API endpoints
3. Set up authentication and security
4. Configure CORS and domain settings

## 🔒 Security Features

### **Authentication**
- Protected routes for all admin functions
- JWT token management
- Session persistence
- Secure logout functionality

### **Authorization**
- Role-based access control
- Permission-based features
- Secure API endpoints
- Input validation and sanitization

### **Data Protection**
- HTTPS enforcement
- XSS protection
- CSRF protection
- Secure data transmission

## 📈 Performance

### **Optimizations**
- Code splitting and lazy loading
- Optimized bundle size
- Efficient re-renders
- Memoized components

### **Monitoring**
- Performance metrics
- Error tracking
- User analytics
- System health monitoring

## 🧪 Testing

### **Test Setup**
```bash
npm run test
# or
yarn test
```

### **Testing Tools**
- Jest for unit testing
- React Testing Library for component testing
- MSW for API mocking
- Coverage reporting

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### **Code Standards**
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Conventional commits for version control

## 📝 License

This project is proprietary to SOLNEX Solutions. All rights reserved.

## 🆘 Support

### **Documentation**
- Component documentation in code
- API reference in comments
- Usage examples in components

### **Troubleshooting**
- Check browser console for errors
- Verify API endpoints are accessible
- Ensure all dependencies are installed
- Check environment variable configuration

### **Getting Help**
- Review the code comments
- Check the component structure
- Refer to shadcn/ui documentation
- Contact the development team

## 🔄 Updates

### **Keeping Updated**
- Regular dependency updates
- Security patches
- Feature enhancements
- Performance improvements

### **Migration Guide**
- Version compatibility notes
- Breaking changes documentation
- Upgrade procedures
- Rollback instructions

---

**Built with ❤️ for SOLNEX Solutions**
