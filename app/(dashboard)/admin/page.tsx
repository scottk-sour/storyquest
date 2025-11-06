import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  Users,
  Shield,
  FileText,
  TrendingUp,
  Plus,
  Settings,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'

export default async function AdminPage() {
  const session = await auth()

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/dashboard')
  }

  // Mock data
  const stats = {
    totalStories: 15,
    publishedStories: 8,
    draftStories: 7,
    totalUsers: 342,
    totalChildren: 156,
    professionalsVerified: 23,
    professionalsAwaitingVerification: 5,
    institutionalLicenses: 3,
    thisMonthSessions: 1247,
    thisMonthNewUsers: 45,
  }

  const recentStories = [
    {
      id: '1',
      title: 'Finding a Safe Place',
      status: 'PUBLISHED',
      author: 'Dr. Emily Chen',
      views: 234,
      completions: 189,
      rating: 4.8,
    },
    {
      id: '2',
      title: 'Understanding Feelings',
      status: 'PUBLISHED',
      author: 'Dr. Michael Torres',
      views: 198,
      completions: 156,
      rating: 4.9,
    },
    {
      id: '3',
      title: 'Building Trust',
      status: 'IN_REVIEW',
      author: 'Dr. Sarah Williams',
      views: 0,
      completions: 0,
      rating: null,
    },
  ]

  const pendingVerifications = [
    {
      id: '1',
      name: 'Dr. James Anderson',
      organization: 'County Social Services',
      submittedDate: '2024-11-01',
      dbsNumber: 'DBS-12345678',
    },
    {
      id: '2',
      name: 'Rachel Thompson',
      organization: 'Foster Care Agency',
      submittedDate: '2024-11-03',
      dbsNumber: 'DBS-87654321',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Manage stories, verify professionals, and monitor platform health
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Stories</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {stats.totalStories}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {stats.publishedStories} published
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {stats.totalUsers}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  +{stats.thisMonthNewUsers} this month
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Professionals</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {stats.professionalsVerified}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {stats.professionalsAwaitingVerification} pending
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Sessions</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {stats.thisMonthSessions}
                </p>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Verifications Alert */}
      {pendingVerifications.length > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-orange-900 mb-1">
                  {pendingVerifications.length} Professional{pendingVerifications.length > 1 ? 's' : ''} Awaiting Verification
                </h3>
                <p className="text-sm text-orange-700">
                  Review and verify DBS checks to grant professional access.
                </p>
              </div>
              <Button variant="outline" size="sm">
                Review Now
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Story Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Story Management</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Story
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentStories.map((story) => (
                <div
                  key={story.id}
                  className="p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{story.title}</h4>
                      <p className="text-sm text-gray-600">by {story.author}</p>
                    </div>
                    <Badge
                      variant={
                        story.status === 'PUBLISHED'
                          ? 'success'
                          : story.status === 'IN_REVIEW'
                          ? 'warning'
                          : 'secondary'
                      }
                    >
                      {story.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  {story.status === 'PUBLISHED' && (
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{story.views} views</span>
                      <span>•</span>
                      <span>{story.completions} completions</span>
                      <span>•</span>
                      <span>⭐ {story.rating}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Professional Verifications */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Pending Verifications</CardTitle>
              <Link href="/admin/professionals">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {pendingVerifications.length === 0 ? (
              <div className="text-center py-8 text-gray-600">
                No pending verifications
              </div>
            ) : (
              <div className="space-y-4">
                {pendingVerifications.map((prof) => (
                  <div
                    key={prof.id}
                    className="p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{prof.name}</h4>
                        <p className="text-sm text-gray-600">{prof.organization}</p>
                      </div>
                      <Badge variant="warning">Pending</Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>DBS: {prof.dbsNumber}</p>
                      <p>
                        Submitted:{' '}
                        {new Date(prof.submittedDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        Review
                      </Button>
                      <Button size="sm" className="flex-1">
                        Verify
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-auto py-6 flex-col gap-2" variant="outline">
              <BookOpen className="h-6 w-6" />
              <span>Manage Stories</span>
            </Button>
            <Button className="h-auto py-6 flex-col gap-2" variant="outline">
              <Shield className="h-6 w-6" />
              <span>Verify Professionals</span>
            </Button>
            <Button className="h-auto py-6 flex-col gap-2" variant="outline">
              <Users className="h-6 w-6" />
              <span>User Management</span>
            </Button>
            <Button className="h-auto py-6 flex-col gap-2" variant="outline">
              <Settings className="h-6 w-6" />
              <span>Platform Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
