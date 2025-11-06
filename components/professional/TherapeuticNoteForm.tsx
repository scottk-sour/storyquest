'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Save, X, AlertCircle } from 'lucide-react'

interface TherapeuticNoteFormProps {
  childId: string
  childName: string
  storyId?: string
  storyTitle?: string
  onClose: () => void
  onSave: (note: TherapeuticNote) => void
}

interface TherapeuticNote {
  noteType: 'OBSERVATION' | 'PROGRESS' | 'CONCERN' | 'BREAKTHROUGH' | 'REVIEW'
  content: string
  emotionalState?: string
  engagement?: string
  concerns: string[]
  progress?: string
  sharedWithParent: boolean
  confidential: boolean
}

export function TherapeuticNoteForm({
  childId,
  childName,
  storyId,
  storyTitle,
  onClose,
  onSave,
}: TherapeuticNoteFormProps) {
  const [noteType, setNoteType] = useState<TherapeuticNote['noteType']>('OBSERVATION')
  const [content, setContent] = useState('')
  const [emotionalState, setEmotionalState] = useState('')
  const [engagement, setEngagement] = useState('')
  const [concernInput, setConcernInput] = useState('')
  const [concerns, setConcerns] = useState<string[]>([])
  const [progress, setProgress] = useState('')
  const [sharedWithParent, setSharedWithParent] = useState(false)
  const [confidential, setConfidential] = useState(true)

  const noteTypes = [
    { value: 'OBSERVATION', label: 'Observation', color: 'bg-blue-100 text-blue-800' },
    { value: 'PROGRESS', label: 'Progress', color: 'bg-green-100 text-green-800' },
    { value: 'CONCERN', label: 'Concern', color: 'bg-orange-100 text-orange-800' },
    { value: 'BREAKTHROUGH', label: 'Breakthrough', color: 'bg-purple-100 text-purple-800' },
    { value: 'REVIEW', label: 'Review', color: 'bg-gray-100 text-gray-800' },
  ]

  const addConcern = () => {
    if (concernInput.trim()) {
      setConcerns([...concerns, concernInput.trim()])
      setConcernInput('')
    }
  }

  const removeConcern = (index: number) => {
    setConcerns(concerns.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) {
      alert('Please enter note content')
      return
    }

    onSave({
      noteType,
      content: content.trim(),
      emotionalState: emotionalState.trim() || undefined,
      engagement: engagement.trim() || undefined,
      concerns,
      progress: progress.trim() || undefined,
      sharedWithParent,
      confidential,
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-auto">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Add Therapeutic Note</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                For: <strong>{childName}</strong>
                {storyTitle && ` • Story: ${storyTitle}`}
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Note Type */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Note Type *
              </label>
              <div className="flex flex-wrap gap-2">
                {noteTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setNoteType(type.value as TherapeuticNote['noteType'])}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      noteType === type.value
                        ? type.color
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Note Content */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Note Content *
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your observations, notes, or reflections..."
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Emotional State */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Emotional State
                </label>
                <input
                  type="text"
                  value={emotionalState}
                  onChange={(e) => setEmotionalState(e.target.value)}
                  placeholder="e.g., Calm, anxious, engaged"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Engagement Level */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Engagement Level
                </label>
                <select
                  value={engagement}
                  onChange={(e) => setEngagement(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select...</option>
                  <option value="High">High - Very engaged and responsive</option>
                  <option value="Medium">Medium - Moderately engaged</option>
                  <option value="Low">Low - Disengaged or distracted</option>
                  <option value="Variable">Variable - Engagement fluctuated</option>
                </select>
              </div>
            </div>

            {/* Concerns */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Concerns or Flags
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={concernInput}
                  onChange={(e) => setConcernInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addConcern())}
                  placeholder="Add a concern (press Enter)"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button type="button" onClick={addConcern} variant="outline">
                  Add
                </Button>
              </div>
              {concerns.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {concerns.map((concern, index) => (
                    <Badge
                      key={index}
                      variant="warning"
                      className="pr-1 flex items-center gap-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      {concern}
                      <button
                        type="button"
                        onClick={() => removeConcern(index)}
                        className="ml-1 hover:text-orange-900"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Progress Notes */}
            {noteType === 'PROGRESS' && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Progress Summary
                </label>
                <textarea
                  value={progress}
                  onChange={(e) => setProgress(e.target.value)}
                  placeholder="Describe the progress made..."
                  className="w-full h-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

            {/* Privacy Settings */}
            <div className="border-t pt-6">
              <h4 className="font-medium text-gray-900 mb-3">Privacy Settings</h4>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={confidential}
                    onChange={(e) => setConfidential(e.target.checked)}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Confidential</div>
                    <div className="text-sm text-gray-600">
                      Only visible to professionals with appropriate access
                    </div>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sharedWithParent}
                    onChange={(e) => setSharedWithParent(e.target.checked)}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Share with Parent/Guardian</div>
                    <div className="text-sm text-gray-600">
                      Make this note visible to the child's parent/guardian
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-end pt-4 border-t">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                <Save className="h-4 w-4 mr-2" />
                Save Note
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
