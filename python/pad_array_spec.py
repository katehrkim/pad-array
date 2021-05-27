# Write unit tests!
import unittest
from pad_array import pad

class PadArrayTestCase(unittest.TestCase):
    """Tests for pad_array.py"""
    def test_one(self):
        self.assertEqual(pad([1,2,3], 5), [1,2,3,None,None])
    def test_two(self):
        self.assertEqual(pad([1,2,3], 5, 'apple'), [1,2,3,'apple', 'apple'])

if __name__ == '__main__':
    unittest.main()