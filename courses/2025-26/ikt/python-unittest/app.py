import unittest


def osszead(a: int, b: int) -> int:
    return a + b


class TestOsszeadas(unittest.TestCase):

    def test_two_positive(self):
        fgv = osszead(1, 2)
        self.assertGreater(fgv, 0)

    def test_two_zero(self):
        fgv = osszead(0, 0)
        self.assertEqual(fgv, 0)


unittest.main()
