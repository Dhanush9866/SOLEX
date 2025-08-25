#!/bin/bash

# Setup script for SOLNEX Admin Panel UI Components

echo "🚀 Setting up SOLNEX Admin Panel UI Components..."

# Initialize shadcn/ui
npx shadcn@latest init --yes

# Install essential UI components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add select
npx shadcn@latest add table
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add badge
npx shadcn@latest add alert
npx shadcn@latest add tabs
npx shadcn@latest add toast
npx shadcn@latest add tooltip
npx shadcn@latest add popover
npx shadcn@latest add accordion
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add switch
npx shadcn@latest add textarea
npx shadcn@latest add avatar
npx shadcn@latest add progress
npx shadcn@latest add separator
npx shadcn@latest add navigation-menu
npx shadcn@latest add scroll-area
npx shadcn@latest add slider
npx shadcn@latest add calendar
npx shadcn@latest add command
npx shadcn@latest add context-menu
npx shadcn@latest add hover-card
npx shadcn@latest add menubar
npx shadcn@latest add resizable
npx shadcn@latest add sonner

echo "✅ UI Components setup complete!"
echo "🎨 You can now start the development server with: npm run dev"
